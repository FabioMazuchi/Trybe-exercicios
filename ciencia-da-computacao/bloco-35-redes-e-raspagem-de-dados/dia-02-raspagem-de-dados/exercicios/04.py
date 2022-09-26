import requests
from parsel import Selector


BASE_URL = "http://books.toscrape.com/catalogue/"
response = requests.get(BASE_URL + "the-grand-design_405/index.html")
selector = Selector(response.text)

titulo = selector.css("h1::text").get()

preço = selector.css(".price_color::text").re_first(r"\d*\.\d{2}")

descrição = selector.css("#product_description ~ p::text").get()
suffix = "...more"
if descrição.endswith(suffix):
    description = descrição[:-len(suffix)]

capa = BASE_URL + selector.css("#product_gallery img::attr(src)").get()

print(titulo, preço, descrição, capa, sep=",")
