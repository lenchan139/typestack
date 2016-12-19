# TypeStack

This project is in early development stage. Please come back later.

# Model

**Model** is a first class citizen of TypeStack framework. 
In your applications everything you do revolves around your models.
Most of the time all you do is saving, fetching and removing your models.

All your models **must be** classes.

# Controller

**Controller** is a bridge between your frontend and backend.
When your frontend talks with the backend it calls methods of your controller.
Controllers are designed to serve models.
Each controller is per-model. For example, if you have `Post` model, then you have a `PostController`
controller which handles all database operations with `Post` model.
You can have multiple controllers for a single model, in the cases if your controller's logic is growing too much.
This means that one controller can only serve a single model.
You can perform various operations with your models throw the controllers.
Controllers are also services, which means you can inject other services there.

Keep your controller simple. 
If controllers are getting huge, delegate code inside them into the classes-services called **"Managers"**.

If you skip your controller's model, then it will serve as a simple controller that serves regular http requests.
This is generally not recommended to do, however there may be situations when you need to perform some operation
on your backend without having a model.

# Service

**Service** can help you split your complicated domain logic.
Keep your code clean and follow single responsibility principle.
Each your service should do only one thing.

Naming convention for commonly used services:

* **Manager**

your **Manager** should be a place of complex manipulations of your models.
Let's say you have a `Post` model, then you can create a `PostManager` service which contain  all manipulations with `Post` model.

* **Repository**

your **Repository** services should perform communication with data sources, like databases. 
Each repository is per-model. For example, if you have `Post` model, then you have a `PostRepository`
service which handles all database operations with `Post` model.

* **Util**

your **Util** services should have small utility functions. 
They are not particularly related to your models, but can be.


Other services can be named differently. 
For example if your service encrypts password of the user, you can name it `PasswordEncryptor`. 
Sometimes you way want to name your services with `Service` postfix, for example `PasswordEncryptorService`.
