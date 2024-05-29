from bs4 import BeautifulSoup
import requests
import json

def parse_html(url):
    # Make an HTTP GET request to the specified URL
    response = requests.get(url)
    
    # Check if the request was successful
    if response.status_code == 200:
        html_content = response.text
    else:
        return "Error fetching the webpage"

    # Parse the HTML content using BeautifulSoup
    soup = BeautifulSoup(html_content, 'html.parser')

    # Find all div elements with 'class' attribute starting with 'product-list_productListItem_'
    product_list_divs = soup.find_all('div', {'class': lambda x: x and x.startswith('product-list_productListItem_')})

    # Extracting Product Name, data-skuid, data-productid, img title, href, and srcset from each product list div
    products_data = []
    for div in product_list_divs:
        product_info = {'ProductName': div.find('h3').text.strip() if div.find('h3') else None}
        slides_data = []

        # Find all li elements with 'aria-label' attribute starting with 'slide' within the div
        slide_list_items = div.find_all('li', {'aria-label': lambda x: x and x.startswith('slide')})
        
        for li in slide_list_items:
            slide_info = {}

            # Find the first anchor tag and extract data
            first_anchor = li.find('a')
            if first_anchor:
                slide_info['data-skuid'] = first_anchor.get('data-skuid', None)
                slide_info['data-productid'] = first_anchor.get('data-productid', None)
                slide_info['href'] = first_anchor['href'].split("?color")[0] if 'href' in first_anchor.attrs else None

                # Extract the title from the image tag within the anchor tag
                first_image = first_anchor.find('img')
                if first_image:
                    slide_info['title'] = first_image.get('title', None)

                    # Extracting the srcset value up to '?'
                    srcset = first_image.get('srcset', '')
                    srcset_url = next((url.split('?')[0].strip() for url in srcset.split(',')
                                       if "https://images.lululemon.com/is/image/lululemon/" in url), None)
                    slide_info['srcset'] = srcset_url.split('lululemon/')[1] if srcset_url and 'lululemon/' in srcset_url else srcset_url

            slides_data.append(slide_info)
        product_info['Slides'] = slides_data
        products_data.append(product_info)

    return json.dumps(products_data, indent=2)

# Example usage
url = 'https://shop.lululemon.com/c/men-pants/_/N-7ub'  # Replace with target URL, do men's pants first
parsed_data = parse_html(url)
print(parsed_data)
