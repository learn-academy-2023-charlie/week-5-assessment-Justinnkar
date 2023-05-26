# ASSESSMENT 5: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What does calling super do in a Ruby class?

Your answer: Calling super is calling the parent class and inheriting the parents class attibutes.

Researched answer: Ruby uses the super keyword to call the superclass implementation of the current method. Within the body of a method, calls to super acts just like a call to that original method

2. What is a gem?

Your answer: A ruby gem are code snippets, or libraries that are used as dependicies.

Researched answer: A Ruby gem is a self-contained library or software component that extends the functionality of the Ruby programming language. It follows a standardized format and can be easily distributed, shared, and managed using the RubyGems package manager. Gems allow developers to incorporate existing solutions into their Ruby projects, saving time and effort. They cover a wide range of functionalities and can be used for web development, database connectivity, testing frameworks, authentication, and more. Overall, Ruby gems enhance Ruby's capabilities and facilitate the development of robust and feature-rich applications.

3. What is a relational database? Are there other kinds of databases?

Your answer: Relational databases store data in tables with certian predefined relationships.

Researched answer: A relational database is a type of database management system that organizes data into tables with predefined relationships. It uses a tabular structure and SQL for querying and manipulating data. NoSQL databases handle unstructured or semi-structured data, while key-value stores store data as key-value pairs. Document databases store data as JSON-like documents, columnar databases optimize data compression and analytics, and graph databases manage complex relationships. The choice of database depends on factors such as data structure and the specific requirements of the application.

4. What are primary keys? Why purpose does a primary key serve?

Your answer: Primary keys are unique ids for each instance of an object within a table.

Researched answer: A primary key in a relational database is a unique identifier assigned to each record in a table. Its purpose is to ensure data integrity by preventing duplicates and serving as a reference for relationships between tables. Primary keys are indexed for efficient data retrieval and play a crucial role in updating or deleting specific records. They provide a reliable means of identification and contribute to the overall performance and consistency of a database.

5. What are the five HTTP verbs? What is each verb's corresponding CRUD action?

Your answer: get - read, post - create, put - update, patch - update, delete - delete

Researched answer: 
The five HTTP verbs are commonly used in web development. GET is used to retrieve data, POST to create new resources, PUT to update or replace existing data, PATCH to partially modify data, and DELETE to remove resources. These verbs correspond to the CRUD actions: GET for Read, POST for Create, PUT and PATCH for Update, and DELETE for Delete.

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Model validations:
Model validations are rules applied to data in a model to ensure its integrity, such as checking for presence, uniqueness, and format, preventing the storage of invalid data.

2. RESTful routes:
RESTful routes are a standardized approach to structuring URLs in web applications, mapping HTTP verbs to specific endpoints, and organizing resources, following the principles of REST architecture.

3. ERB:
ERB (Embedded Ruby) is a templating language used in Ruby web frameworks that allows developers to embed Ruby code within HTML or text files, enabling dynamic content 

4. Params:
Params, short for parameters, refer to the data passed from the client-side to the server-side of a web application, such as form inputs or URL query strings, which are then accessible for processing and handling user actions or data manipulation.

5. API:
An API (Application Programming Interface) defines the rules and protocols for different software components or applications to interact with each other, enabling communication, data exchange, and integration between systems, often used in web development to access functionalities provided by external services or platforms.
