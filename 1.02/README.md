### Assignment 1.02

The docker image based on the project can be found in https://hub.docker.com/repository/docker/lauraleonilla/web-server
You can deploy it with kubernetes by running:

1. kubectl create deployment web-server --image=lauraleonilla/web-server
2. Get the pod name with kubectl get pods
3. You can check the logs with kubectl logs -f web-server-58fd5b6d48-v5jtg (the pod name after the -f)