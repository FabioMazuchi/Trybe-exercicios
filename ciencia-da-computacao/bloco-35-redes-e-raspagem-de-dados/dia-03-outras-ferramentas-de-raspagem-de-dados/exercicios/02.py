from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.firefox.options import Options

options = Options()
options.add_argument("--headless")

url_base = "https://www.wikimetal.com.br/"
url = url_base + "iron-maiden-scorpions-kiss-veja-melhores-albuns-1982/"

firefox = webdriver.Firefox(options=options)

firefox.get(url)
paragrafos = firefox.find_elements(By.TAG_NAME, "p")

for p in paragrafos:
    print(p.text)
