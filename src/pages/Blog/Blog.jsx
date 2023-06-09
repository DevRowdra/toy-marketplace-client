import React, { useEffect } from 'react';

const Blog = () => {
  useEffect(() => {
    document.title = 'Speed Toy || Blog';
  }, []);
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className=" text-center">
          <div className="">
            <h1 className="text-5xl font-bold">
              What is an access token and refresh token?
            </h1>
            <p className='m-6'>
              Access token and a refresh token are commonly used in
              authentication and authorization systems to protected resources
            </p>
            <div className="grid grid-cols-2">
            <div className='border border-zinc-500 rounded-lg m-2 p-3 hover:bg-red-300 transform hover:scale-105 transition-all duration-300'>
                <h4 className="text-2xl">Access token</h4>
                <p>
                  <span className="text-xl">Access token</span> : use to access
                  users data from Database. it specific the user and it behavior
                  and give the user his specific data. it has an expiration
                  time.When its over the token can't work.
                </p>
              </div>
              <div className='border border-zinc-500 rounded-lg m-2 p-3 hover:bg-red-300 transform hover:scale-105 transition-all duration-300'>
                <h4 className="text-2xl">Refresh Token</h4>
                <p>
                  <span className="text-xl">Refresh Token</span> : A refresh
                  token is a long-lived credential that is used to generate a
                  new access token.it works when the original access token
                  expires. it create a new Access token and give it to the user
                  .
                </p>
              </div>
              <div className="col-span-2 mt-5">
                <h1 className="text-3xl m-2">
                  How do they work and where should we store them on the
                  client-side?
                </h1>
              </div>
              <div className='border border-zinc-500 rounded-lg m-2 p-3 hover:bg-red-300 transform hover:scale-105 transition-all duration-300'>
                <h4 className="text-2xl">Refresh Token</h4>
                <p>
                  <span className="text-xl">Access token</span> : :When a user
                  successfully logs in or authorizes access, an access token is
                  issued by the authentication server.when the user login
                  successfully the access token go to the server and give
                  accesstoken to database if token if valid it give user right
                  info. It is recommended to store access tokens in a secure
                  manner on the client-side. Common developer storing them in an
                  HTTP-only cookie.
                </p>
              </div>
              <div className='border border-zinc-500 rounded-lg m-2 p-3 hover:bg-red-300 transform hover:scale-105 transition-all duration-300'>
                <h4 className="text-2xl">Refresh Token</h4>
                <p>
                  <span className="text-xl">Refresh Token</span> : A refresh
                  token is a long-lived credential used to obtain a new access
                  token.It works when access token is expired . it go to the
                  server and generate a new access token . and give the client.
                  Refresh tokens stored securely on the client-side. as they
                  have a longer life and pose a higher risk if compromised.
                  Storing them in an HTTP-only cookie is secure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero min-h-screen bg-base-200">
        <div className=" text-center">
          <h1 className="text-5xl font-bold mb-5">
            Compare SQL and NoSQL databases?
          </h1>
          <div className="grid grid-cols-2">
          <div className='border border-zinc-500 rounded-lg m-2 p-3 hover:bg-red-300 transform hover:scale-105 transition-all duration-300'>
              <ul>
                <h1 className="mt-5 text-lg">SQL</h1>
                <li>
                  It follow a structured data model known as the relational
                  model. Data is organized into tables with predefined schemas .
                </li>
                <li>
                  It enforce a schema, which defines the structure of the data
                  and the relationships between tables.{' '}
                </li>
                <li>
                  It typically scale vertically by adding more resources to a
                  single server.
                </li>
                <li></li>
              </ul>
            </div>
            <div className='border border-zinc-500 rounded-lg m-2 p-3 hover:bg-red-300 transform hover:scale-105 transition-all duration-300'>
              <ul>
                <h1 className="mt-5 text-lg">NoSQL</h1>
                <li>
                  It utilize various data models. such as key-value, document,
                  columnar, or graph. They offer flexibility in storing
                  unstructured or semi-structured data
                </li>
                <li>
                  It is schema-less or have a flexible schema. They allow
                  dynamic and agile development by enabling the storage of data
                  without a predefined structure
                </li>
                <li>
                  It designed to scale horizontally, making it easier to
                  distribute data across multiple servers.{' '}
                </li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="hero min-h-screen bg-base-200">
        <div className=" text-center">
          <h1 className="text-5xl font-bold mb-5">
            What is express js? What is Nest JS?{' '}
          </h1>
          <div className="grid grid-cols-2">
          <div className='border border-zinc-500 rounded-lg m-2 p-3 hover:bg-red-300 transform hover:scale-105 transition-all duration-300'>
              <h1 className="mt-5 text-lg">What is express js?</h1>
              <p>
                <span className="text-xl">Express js</span> :Express.j is a
                popular web application framework for Node.js.A runtime
                environment for executing JavaScript code outside of a web
                browser. Express.js provides us set of features and utilities
                for building web applications and Apis. It simplifies the
                process of make web application. It used in building web
                applications, Restful Apis, and real-time applications.
              </p>
            </div>
            <div className='border border-zinc-500 rounded-lg m-2 p-3 hover:bg-red-300 transform hover:scale-105 transition-all duration-300'>
              <h1 className="mt-5 text-lg">What is Nest JS?</h1>
              <p>
                <span className="text-xl">Nest JS</span> : a powerful
                open-source framework for building server-side applications . It
                using TypeScript. It is usually referred to as a "progressive"
                Node.js framework.Because it combines elements from different
                architectures and design patterns, including Object-Oriented
                Programming , Functional Programming , and Reactive Programming.
                It can work various HTTP framework frameworks like Express.js
                and Fastify.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="hero min-h-screen bg-base-200">
        <div className=" text-center">
          <h1 className="text-5xl font-bold">
            What is MongoDB aggregate and how does it work?
          </h1>
          
          <div className='border border-zinc-500 rounded-lg m-2 p-3 hover:bg-red-300 transform hover:scale-105 transition-all duration-300 mt-5'>
              <p>
                Aggregation is a way of processing a large number of documents
                in a collection by means of passing them through different
                stages. The stages make up as a pipeline The input of the
                pipeline can be a single collection, where others can be merged
                later down the pipeline. The pipeline then performs successive
                transformations on the data until our goal is achieved. This
                way, we can break down a complex query into easier stages, in
                each of which we complete a different operation on the data
              </p>
            </div>

          
        </div>
      </div>
    </div>
  );
};

export default Blog;
