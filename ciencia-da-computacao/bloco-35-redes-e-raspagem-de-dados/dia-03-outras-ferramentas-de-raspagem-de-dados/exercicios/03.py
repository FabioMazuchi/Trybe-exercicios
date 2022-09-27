from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.firefox.options import Options

options = Options()
options.add_argument("--headless")

url = "https://diolinux.com.br/"

firefox = webdriver.Firefox(options=options)

firefox.get(url)

posts = []
for post in firefox.find_elements(By.CLASS_NAME, "post-outer"):
    item = {}

    item["title"] = (
        post.find_element(By.CLASS_NAME, "entry-title")
        .find_element(By.TAG_NAME, "a")
        .get_attribute("innerHTML")
    )

    item["link"] = (
        post.find_element(By.CLASS_NAME, "entry-title")
        .find_element(By.TAG_NAME, "a")
        .get_attribute("href")
    )

    item["excerpt"] = post.find_element(
        By.CLASS_NAME, "entry-excerpt"
    ).get_attribute("innerHTML")

    posts.append(item)

print(posts)
