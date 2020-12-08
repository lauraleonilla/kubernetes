### Assignment 1.05

The docker image based on the project can be found in https://hub.docker.com/repository/docker/lauraleonilla/html-web-server
You can deploy it with kubernetes by running:

1. kubectl create deployment html-web-server --image=lauraleonilla/html-web-server
2. Get the pod name with kubectl get pods
3. Forward the default port 3000 to 3003 with kubectl port-forward html-web-server-7766bdcb74-2s66j 3003:3000