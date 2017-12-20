Maps are quite similar to simple JavaScript objects. Maps are a set/collection of keys that have values associated with those keys. Unlike objects, they don't have prototypes, inheritance, methods, or anything of that sort. Maps are also similar to associative arrays in other languages. Again, since the keys are a set, there cannot be duplication of keys (makes sense, right?) You can have duplication of values though. Key 'thing' can have value 'map' while key 'other thing' can have a value of 'map' as well.

Also known as Dictionaries in other languages.


Example:

Obj.x = 5;

JavaScript Natively has Maps as of ES6.

Leaking DOM nodes might be a good use case for Sets and Maps in Libraries because then you can just pass the reference and not keep it in memory.