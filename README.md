# Practical Coding - .NET Web Development Showcase

## Overview

This project is a collection of code examples and applications demonstrating various web development technologies and patterns within the .NET ecosystem. It appears to be the result of a series of coding sessions or workshops focused on practical application of these technologies.

The examples cover a range of topics including:
- Front-end development with AngularJS
- Data visualization with Highcharts
- Building RESTful APIs with ASP.NET Web API
- Real-time web functionality with SignalR
- Data access with Entity Framework 6
- Caching with Redis
- Full-text search with Elasticsearch

## Project Structure

The repository is organized as follows:

- **`/doc`**: Contains documentation, likely presentation slides (`.pptx`) and other documents related to the coding sessions. The original descriptions are in Chinese.
- **`/lib`**: Contains third-party libraries and dependencies used by the projects.
- **`/src`**: Contains the source code for the projects.
    - **`PracticalCoding.Web`**: An ASP.NET web application that seems to be the main project, showcasing integrations of the various technologies.
    - **`Session_05_UnitTest`**: A project likely focused on unit testing practices.
    - **`Session_06_DataloadToElasticsearch`**: A project demonstrating how to load data into Elasticsearch.
- **`README.md`**: This file, providing an overview of the project.

## Technologies Used

This project demonstrates the use of a wide array of technologies, including but not limited to:

- **Backend:**
    - ASP.NET MVC & Web API
    - Entity Framework 6
    - SignalR
    - C#
- **Frontend:**
    - AngularJS
    - Highcharts
    - HTML, CSS, JavaScript
    - Bootstrap
- **Databases & Caching:**
    - SQL Server (implied by `.mdf` and `.ldf` files)
    - Redis
    - Elasticsearch
- **Libraries & Tools:**
    - AutoMapper
    - CsvHelper
    - Newtonsoft.Json
    - jQuery
    - Modernizr
    - NServiceKit
    - NuGet (for package management)

## Sessions/Modules

The project seems to be structured around a series of sessions. The original `README.md` (in Chinese) provided descriptions for these sessions:

1.  **AngularJS Introduction:** Basics of AngularJS for SPA development.
2.  **AngularJS + Highcharts:** Integrating dynamic charts into web applications.
3.  **AngularJS + ASP.NET Web API 2:** Connecting front-end applications with backend services.
4.  **AngularJS + ASP.NET Web API 2 + Entity Framework 6:** Full-stack development including ORM.
5.  **AngularJS + ASP.NET Web API 2 + EF6 + Redis:** Incorporating caching for performance.
6.  **AngularJS + ASP.NET Web API 2 + EF6 + Redis + Elasticsearch:** Adding full-text search capabilities.

*Note: The detailed descriptions for these sessions are in the original Chinese README.md and may also be found within the `/doc` directory.*

## How to Use

Given the nature of this project as a collection of examples and session-based code:

1.  **Clone the repository.**
2.  **Open the solution file (`src/PracticalCoding.sln`) in Visual Studio.**
3.  **Restore NuGet packages:** This should happen automatically or you might need to do it manually via the NuGet Package Manager.
4.  **Database Setup:** The project `PracticalCoding.Web` includes a `.mdf` file (`App_Data/PracticalCoding.mdf`), suggesting a SQL Server Express LocalDB instance might be used. Entity Framework migrations are present, so the database schema should be creatable via `Update-Database` in the Package Manager Console, targeting the `PracticalCoding.Web` project.
5.  **Configuration:** Check `Web.config` files for any specific connection strings or settings that might need adjustment for your environment (e.g., Redis server address, Elasticsearch server address).
6.  **Running the Examples:**
    *   Set `PracticalCoding.Web` as the startup project to explore the main web application.
    *   Other projects like `Session_05_UnitTest` or `Session_06_DataloadToElasticsearch` can be run or examined individually.

*Disclaimer: This project appears to be from around 2014-2015. Some dependencies might be outdated, and setting up the exact environment (specific versions of SQL Server, Redis, Elasticsearch) might require some effort.*

## Contributing

This project is primarily a showcase of coding session examples. While contributions for bug fixes or updates to modern practices could be considered, it's likely not under active development for new features.

## License

No license is explicitly stated in the repository. Please assume standard copyright unless otherwise specified.
