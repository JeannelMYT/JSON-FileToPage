# JSON-FileToPage
This project is my exploration on the feasibility of printing content from a JSON file retrieved from one site onto another. 

This page uses a sample file from Singapore Government Technologies' "My Careers Future" Content page and will work with any page of `https://content.mycareersfuture.sg/wp-json/wp/v2/posts/[POST NUMBER]` where **[POST NUMBER]** is the id number of the post available on the site. 

## Pre-Conditions to run
Current build is not cross-origin compatible. Testing is done on Chrome using a [Cross-Origin Resource Sharing (CORS) Extension](https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=en-US) to make it possible for the browser to obtain content from a site that is not from the same source. 

## Steps to Run 
1. Download the repository 
2. Unzip the files 
3. (OPTIONAL) Edit the following line in openJson.js if you are using content from a different site, based on the name of the JSON value you want to obtain. The JSON this code references stores it's "title" with the JSON Array named "title", with the name of the value we are interested in named "rendered" within the array. Edit **['title']** **['rendered']** as required.   

```
28      myH1.textContent = jsonObj['title']['rendered'];
```
4. Ensure that the CORS extension is active (the icon will be on the right of your address bar and coloured) 
5. Open index.html in Chrome 
6. Enter the addresss where you want to retrieve the JSON from (e.g. https://content.mycareersfuture.sg/wp-json/wp/v2/posts/2980) 
7. Text from the page should appear. Running details should appear on the console log. 
