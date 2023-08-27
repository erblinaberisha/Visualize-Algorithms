import graph from "./images/graphh.png";
import primes from "./images/primess.png";
import sort from "./images/sortt.png";
import sort1 from "./images/sort1.png";
import binSearch from "./images/binary.png";
import convex from './images/hulll.png';
export function getDetails(){
   return [
       {
           id:1,
           title:"Pathfinder",
           description:"Visualize graph algorithms like Dijkstra, A*, BFS, DFS",
           route:"/pathfinder",
           img:graph
       },
       {
           id:2,
           title:"Iterative Sorting",
           description:"Compare different Iterative sorting algorithms",
           route:"/sort",
           img:sort
       },
       {
           id:3,
           title:"Recursive Sorting",
           description:"Compare different Recursive sorting algorithms",
           route:"/recursivesort",
           img:sort1
       },
       {
           id:4,
           title:"Prime Numbers",
           description:"Visualize Seive algorithm and the Archimedes Spiral pattern",
           route:"/prime",
           img:primes
       },
       {
           id:5,
           title:"Convex Hull",
           description:"The convex hull of a set of points is the smallest convex polygon that contains all the points of it",
           route:"/convexhull",
           img:convex
       },
       {
           id:6,
           title:"Binary Search",
           description:"Binary search is an efficient algorithm for finding an item from a sorted list of item",
           route:"/binarysearch",
           img:binSearch
       }

   ]
}