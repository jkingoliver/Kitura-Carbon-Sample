[![Platform](https://img.shields.io/badge/platform-swift-lightgrey.svg?style=flat)](https://developer.ibm.com/swift/)

### Table of Contents
* [Summary](#summary)
* [Requirements](#requirements)
* [Create a Kitura application](#create-a-kitura-application)
* [Install the IBM Carbon Design System](#install-the-ibm-carbon-design-system)
* [Build Your Web Page](#build-your-web-page)
* [Run](#run)
* [License](#license)

### Summary
This application provides a starting point for creating Swift applications running on [Kitura](https://developer.ibm.com/swift/kitura/) and using [IBM Carbon Design System](http://www.carbondesignsystem.com/).

These are the steps to create this sample:
1. Create a Kitura Swift application using a Yeoman generator
2. Install IBM Carbon Design System artifacts using `npm install`
3. Build out a web page and integrate the Carbon Design components of interest

This sample consistes of a web page with a single card component:

![Carbon Design Card Screenshot](https://github.com/jkingoliver/Kitura-Carbon-Sample/raw/master/docs/Carbon-card.png)


### Requirements
* [Swift 3](https://swift.org/download/)
* [NodeJS](https://nodejs.org)
* [IBM Carbon Design System](http://www.carbondesignsystem.com/)

### Create a Kitura application
Create a Kitura Swift application for the backend using the [Swift Server generator](https://github.com/IBM-Swift/generator-swiftserver/).

This module is a [Yeoman](http://yeoman.io) generator for creating REST webservices based on the [Kitura web framework](http://kitura.io) with the [Swift](https://swift.org/) language.

This generator and the Yeoman library run on Node.js and generate a Swift 3 application. This application serves as the backend of this sample project and statically serves an HTML page that contains a Cabon Design component.

#### Installation
To use this module, you will need Node.js and Swift 3 installed on your Linux or macOS system. You can get Node.js from https://nodejs.org and Swift 3 from https://swift.org/download.

You will also need the Yeoman command line utility [yo](https://github.com/yeoman/yo) installed in your global Node.js module directory.  
To install yo, use: 
    ```
    npm install -g yo
    ```
To install this generator, use: 
    ```
    npm install -g git+https://github.com/IBM-Swift/generator-swiftserver
    ```

#### Quick start
To create a Swift Server project, use: `yo swiftserver`. Using the command line interface, select a project name and directory name. Then select the following options:

* Scaffold a starter
* Web
* Static web file serving (leave other options unselected)
* Leave all other options unselected for the most bare-bones Swift project or choose to add persistence services or other Bluemix deployment options.

#### Static web file serving
The resulting application includes a `public` directory in the root of the project. The contents of this directory will be served as static content using the built-in Kitura [StaticFileServer module](https://github.com/IBM-Swift/Kitura/wiki/Serving-Static-Content).

This content is hosted on `/`. For example, if you want to view `public/myfile.html` and the application is hosted at https://localhost:8080, go to https://localhost:8080/myfile.html.

### Install the IBM Carbon Design System

The [Carbon Component Library](http://www.carbondesignsystem.com/getting-started/developers) provides frontend developers & engineers a collection of reusable HTML and SCSS partials to build websites and user interfaces. Adopting the library enables developers to use consistent markup, styles, and behavior in prototype and production work.

    ```
    cd <directory of Swift project created above>
    $ npm install --save carbon-components
    ```

This will create a `node_modules` directory with the Carbon Design library, which contains all components available for your project.

### Build your web page

Create your own markup that includes [Carbon Design components](http://carbondesignsystem.com/getting-started/developers) or copy artifacts from this repository. 

This sample uses gulp as a task manager to copy scss and image artifacts into the public directory, from where the Kitura server will statically serve them. 

The `client` directory contains the HTML, image files and scss necessary to render the Carbon Design card component.

`node_modules` contains the Carbon Design components, along with scss and fonts, that are generated in the installation step above.

Copy the following artifacts into your sample: 
1. `client` directory
1. `package.json`
1. `gulpfile.js`

### Run
To build and run the application:
1. `swift build`
1. `npm install`
1. `gulp`
1. `.build/debug/<application name>`

Then access http://localhost:8080/ in your browser. This sample shows a `card` component from Carbon Design. The markup was copied directly from their documentation. 

### License
All generated content is available for use and modification under the permissive MIT License (see `LICENSE` file), with the exception of SwaggerUI which is licensed under an Apache-2.0 license (see `NOTICES.txt` file).