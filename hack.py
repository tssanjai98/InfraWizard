from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.action_chains import ActionChains

import time

# Set up the WebDriver (make sure to have the correct path to your driver)
try:
    service = Service('/Users/sakethreddy/Downloads/chromedriver-mac-arm64-2/chromedriver')
    driver = webdriver.Chrome(service=service)

    driver.maximize_window()

    # Step 1: Open Lucidchart
    # driver.get('https://www.lucid.app/users/login')
    driver.get('https://lucid.app/lucidchart/86d57795-9a47-45f0-95fc-ff8acdeaa70a/edit')

    login_button_path = '/html/body/lucid-chart-gui/lucid-full-page-application/lucid-session-expiration-filter/div/lucid-fast-switching-context/div/div/main/lucid-chart-editor-header/div/lucid-header/div/div[3]/lucid-top-right-menu/lucid-hamburger-collapsible/lucid-request-edit-access/div/div/div/span[2]/lucid-button/button'
    login_button = WebDriverWait(driver, 3).until(
        EC.visibility_of_element_located((By.XPATH, login_button_path))
    )
    login_button.click()

    text_field_name = 'init-username'
    time.sleep(1)
    # Wait until the input field is present and visible
    text_field = WebDriverWait(driver, 3).until(
        EC.visibility_of_element_located((By.XPATH, '/html/body/lucid-auth-app/lucid-full-page-application/lucid-session-expiration-filter/div/lucid-scrollable/div/main/lucid-login-page/lucid-revenue-container/div[2]/div[1]/lucid-login-form/lucid-marketing-input/label/lucid-input/input'))
    )

    text_field.click()  # Click on the field to focus
    text_field.send_keys('wallkafan@gmail.com')  # Replace with your email address

    next_button_path = '/html/body/lucid-auth-app/lucid-full-page-application/lucid-session-expiration-filter/div/lucid-scrollable/div/main/lucid-login-page/lucid-revenue-container/div[2]/div[1]/lucid-login-form/lucid-marketing-button/lucid-native-button-wrapper/button'
    nex_button = WebDriverWait(driver, 3).until(
        EC.visibility_of_element_located((By.XPATH, next_button_path))
    )
    nex_button.click()

    text_field_pass = WebDriverWait(driver, 3).until(
        EC.visibility_of_element_located((By.XPATH, '/html/body/lucid-auth-app/lucid-full-page-application/lucid-session-expiration-filter/div/lucid-scrollable/div/main/lucid-login-page/lucid-revenue-container/div[2]/div[1]/lucid-login-form/lucid-marketing-input[2]/label/lucid-input/input'))
    )

    text_field_pass.click()  # Click on the field to focus
    text_field_pass.send_keys('password123')

    login_button_path = '/html/body/lucid-auth-app/lucid-full-page-application/lucid-session-expiration-filter/div/lucid-scrollable/div/main/lucid-login-page/lucid-revenue-container/div[2]/div[1]/lucid-login-form/lucid-marketing-button/lucid-native-button-wrapper/button'
    log_button = WebDriverWait(driver, 3).until(
        EC.visibility_of_element_located((By.XPATH, login_button_path))
    )
    log_button.click()

    time.sleep(10)

    chart_area_xpath = '/html/body/lucid-chart-gui/lucid-full-page-application/lucid-session-expiration-filter/div/lucid-fast-switching-context/div/div/main/div[1]/div[5]/lucid-viewport/div[1]'

    chart_area = WebDriverWait(driver, 3).until(
        EC.visibility_of_element_located((By.XPATH, chart_area_xpath))
    )
    
    # Click on the chart area to focus
    chart_area.click()

    # Send Ctrl+A (Cmd+A on Mac) to select all elements in the chart
    action_chains = ActionChains(driver)
    action_chains.key_down(Keys.COMMAND).send_keys('a').key_up(Keys.COMMAND).perform()  # Use Keys.COMMAND for Mac if needed
    
    # Send the Delete key to remove all selected elements
    action_chains.send_keys(Keys.DELETE).perform()



    svg_xpath = '/html/body/lucid-chart-gui/lucid-full-page-application/lucid-session-expiration-filter/div/lucid-fast-switching-context/div/div/main/main/lucid-left-dock/div[1]/div[8]/lucid-toggle-button'

    # Wait for the SVG element to be visible
    svg_element = WebDriverWait(driver, 3).until(
        EC.visibility_of_element_located((By.XPATH, svg_xpath))
    )

    # Click on the SVG element
    svg_element.click()


    time.sleep(5)

    textarea_xpath = '/html/body/lucid-chart-gui/lucid-full-page-application/lucid-session-expiration-filter/div/lucid-fast-switching-context/div/div/main/main/lucid-left-dock/div[2]/lucid-resizeable-left-panel/div/lucid-chunk-wrapper/lucid-left-dock-generate-diagram-panel/div/lucid-scrollable/div/div/div/div[2]/div[1]/lucid-input/textarea'

    # Wait for the textarea element to be visible
    textarea_element = WebDriverWait(driver, 10).until(
        EC.visibility_of_element_located((By.XPATH, textarea_xpath))
    )

    # Click on the textarea (optional if needed)
    textarea_element.click()
    textarea_element.send_keys('Top Level: Route 53 for DNS management.Next Level: ELB to route traffic. Middle Layer: EC2 instances for backend processing. Storage: S3 for video storage. Databases: RDS for user data storage.Caching: ElastiCache for performance improvement.Content Delivery: CloudFront for global distribution.User Management: Cognito for authentication.Notifications: SNS for user updates. Queueing: SQS for task management.')

    dropdown_button_xpath = '/html/body/lucid-chart-gui/lucid-full-page-application/lucid-session-expiration-filter/div/lucid-fast-switching-context/div/div/main/main/lucid-left-dock/div[2]/lucid-resizeable-left-panel/div/lucid-chunk-wrapper/lucid-left-dock-generate-diagram-panel/div/lucid-scrollable/div/div/div/div[2]/div[2]/div[2]/lucid-single-select-dropdown/div/lucid-menu-trigger/button'

    # Wait for the dropdown button to be visible
    dropdown_button = WebDriverWait(driver, 3).until(
        EC.visibility_of_element_located((By.XPATH, dropdown_button_xpath))
    )

    # Click the dropdown button
    dropdown_button.click()


    aws_button_xpath = '/html/body/lucid-chart-gui/lucid-full-page-application/lucid-session-expiration-filter/div/lucid-fast-switching-context/div/lucid-overlay-component/lucid-single-select-menu/lucid-menu-container/lucid-scrollable/div/lucid-single-select-menu-item[4]/span/lucid-single-select-menu-item-content/div/div/div/lucid-label/span[1]'

    # Wait for the AWS button option to be visible
    aws_button = WebDriverWait(driver, 3).until(
        EC.visibility_of_element_located((By.XPATH, aws_button_xpath))
    )

    aws_button.click()

    generate_button_xpath = '/html/body/lucid-chart-gui/lucid-full-page-application/lucid-session-expiration-filter/div/lucid-fast-switching-context/div/div/main/main/lucid-left-dock/div[2]/lucid-resizeable-left-panel/div/lucid-chunk-wrapper/lucid-left-dock-generate-diagram-panel/div/lucid-scrollable/div/div/div/div[2]/div[3]/lucid-button[2]/button'

    # Wait for the generate button to be visible and clickable
    generate_button = WebDriverWait(driver, 10).until(
        EC.element_to_be_clickable((By.XPATH, generate_button_xpath))
    )

    # Click the generate button
    generate_button.click()
    

except Exception as e:
    print(f"An error occurred: {e}")

finally :
    time.sleep(10)
    driver.quit()  # Close the browser
