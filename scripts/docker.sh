docker build -t stottleuk/stottle-web .

docker tag stottleuk/stottle-web stottlecontainerregistry.azurecr.io/stottle-web

docker run -p 4201:80 --rm stottlecontainerregistry.azurecr.io/stottle-web

# docker push stottlecontainerregistry.azurecr.io/stottle-web