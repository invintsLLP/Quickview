# Quickview
Quick view using Vue js and JavaScript for Shopify 2.o themes


<b>-Create snippet for quicklyview popup and js<br></b>
quickview_snippet.liquid<br>
quickview.js


<b>-add vue js before the </head> tag in theme liquid</b>
<b>theme.liquid</b>
<script src="{{ 'quickview.js' | asset_url }}" defer></script><br>
<script src="https://cdn.jsdelivr.net/npm/vue@2.6.0"></script><br><br>

-add this both snippet and js on theme liquid.<br>
{% include 'quickview_snippet' %}
