from selenium import webdriver
from selenium.webdriver.common.by import By


url = "https://quotes.toscrape.com/"
firefox = webdriver.Firefox()

firefox.get(url)
quote = firefox.find_element(By.CLASS_NAME, 'text').get_attribute('innerHTML')

print(quote)
