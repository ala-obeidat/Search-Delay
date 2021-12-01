# Search Delay

![On keyup search](https://media.geeksforgeeks.org/wp-content/uploads/20210220114712/SearchAfterEnter.gif)

## Adding on key up event to search input text has pros and cons:
### pros 
+ 1. Better user expreinse than having search button to apply filter.
+ 2. Immediately search while user inserting text.

### cons 
+ 1. Consuming api by calling it many time for single word search.
+ 2. The autocomplete list is stuck due to being served for a short period of time within each key inserted by the user.

## I have implemented a soluton for this which is by delay calling api on keyup input search for some time, as this repository show.
