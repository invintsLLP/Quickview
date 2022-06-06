# Quickview
Quick view using Vue js and JavaScript for Shopify 2.o themes



Create snippet for quicklyview popup and js
quickview_snippet.liquid
quickview.js


add vue js before the </head> tag in theme liquid

theme.liquid
<script src="{{ 'quickview.js' | asset_url }}" defer></script><br>
<script src="https://cdn.jsdelivr.net/npm/vue@2.6.0"></script><br>

  add this both snippet and js on theme liquid.<br>
  {% include 'quickview_snippet' %}
