This is an example repo that demos how to dynamically load components in a lazy loaded module in Angular 2+

This almost entirely relies on @jmcclanahan's answers in this thread: https://github.com/angular/angular/issues/14324

## App Structure: 

````
[AppComponent] 
|
|
V
[HomeComponent] (lazyloaded)
|
|
V
[DynamicModule] --->  (Conditionally loads CompA or B)
|                   |
|                   |
V                   V
[ComponentA]        [ComponentB]

````

## Dependency Graph
![dependency graph](https://raw.githubusercontent.com/jbsouvestre/lazy-loaded-modules/master/src/assets/Selection_789.png)
