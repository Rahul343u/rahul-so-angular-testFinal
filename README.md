# So

use npm install command to install node_modules

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.

Question 1
What is the difference between imports, declarations, and providers?

imports: is used to import supporting modules likes FormsModule, RouterModule, CommonModule,
or any other custom-made feature module.

declarations: is used to declare components, directives, pipes that belongs to the current module.
Everything inside declarations knows each other. For example, if we have a component, say UsernameComponent,
which display list of the usernames, and we also have a pipe, say toupperPipe, which transform string to uppercase
letter string. Now If we want to show usernames in uppercase letters in our UsernameComponent, we can use the
toupperPipe which we had created before but how UsernameComponent know that the toupperPipe exist and how we
can access and use it, here comes the declarations, we can declare UsernameComponent and toupperPipe.

Providers: is used to inject the services required by components, directives, pipes in our module.

Question 2
What is the difference between components, directives, models, modules, and services?

components:
components are simply classes that are designated as a component with the help of a component decorator.
Every component has a defined template which can communicate with the code defined in the component class.

directives :
Directives in angular is use for dom manipulation.
there are two types of directive
Structural directives—change the DOM layout by adding and removing DOM elements.
Attribute directives—change the appearance or behavior of an element, component, or another directive.

models:
models in angular is used to structure data variables in proper way.

modules:
In Angular, a module is a mechanism to group components, directives, pipes and services that are related,
in such a way that can be combined with other modules to create an application.

services:
Services are mainly a way to communicate between controllers, but you can inject one service into another.
Services are often used as a way to get to our data stored.
