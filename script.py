import json
from bs4 import BeautifulSoup

HTML_FILE = "html/p.html"
JSON_FILE = "products.json"

def extract_products():
    """Extracts products from the HTML file and saves them to products.json."""
    with open(HTML_FILE, "r", encoding="utf-8") as file:
        soup = BeautifulSoup(file, "html.parser")
    
    products = []
    for product in soup.find_all("div", class_="product"):
        name = product.find("h3").text.strip()
        image = product.find("img")["src"]
        price = product.find("p", class_="price").text.strip()
        
        # Extract storage options
        options = {}
        for button in product.find_all("button"):
            storage = button.text.strip()
            price_value = button["data-price"]
            options[storage] = int(price_value)
        
        
        products.append({
            "name": name,
            "image": image,
            "price": price,
            "options": options
        })
    
    # Save to JSON
    with open(JSON_FILE, "w", encoding="utf-8") as json_file:

        json.dump(products, json_file, indent=4, ensure_ascii=False)
    
    print(f" {len(products)} products saved to {JSON_FILE}")

def load_products():
    """Loads products from the JSON file."""
    try:
        with open(JSON_FILE, "r", encoding="utf-8") as json_file:
            return json.load(json_file)
    except FileNotFoundError:
        return []

def add_product(name, image, price, options):
    """Adds a new product to both the JSON and HTML file."""
    products = load_products()
    for p in products :
        if name == p["name"] :
            return print("already exist")
    products.append({
        "name": name,
        "image": image,
        "price": price,
        "options": options
    })

    # Save to JSON
    with open(JSON_FILE, "w", encoding="utf-8") as json_file:
        json.dump(products, json_file, indent=4, ensure_ascii=False)

    # Update HTML
    with open(HTML_FILE, "r", encoding="utf-8") as file:
        soup = BeautifulSoup(file, "html.parser")

    # Create new product HTML
    new_product = soup.new_tag("div", **{"class": "product"})
    new_product["data-series"] = "New"

    img_tag = soup.new_tag("img", src=image, alt=name)
    h3_tag = soup.new_tag("h3")
    h3_tag.string = name
    price_tag = soup.new_tag("p", **{"class": "price"})
    price_tag.string = price

    btn_container = soup.new_tag("div", **{"class": "btn-c"})
    for storage, price_value in options.items():
        button = soup.new_tag("button", **{"data-price": str(price_value)})
        button.string = storage
        btn_container.append(button)

    buy_link = soup.new_tag("a", href="#")
    buy_link.string = "Buy Now"

    # Append to product div
    new_product.append(img_tag)
    new_product.append(h3_tag)
    new_product.append(btn_container)
    new_product.append(price_tag)
    new_product.append(buy_link)

    # Add product to products container
    products_container = soup.find("div", class_="products-container")
    if products_container:
        products_container.append(new_product)

