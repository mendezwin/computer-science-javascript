A set is pretty simple. You'll also hear them called collections depending which language you're working with. A set allows allows at least four things: add, remove, contains, and toList. The basic idea is that you can add items to a set and then later check if they're there. You can also request later a list of those items in the set (though with no guaranteed order; sets have no notion of order.) They're also useful for deduplication since you can only add something to a set once.

Think of it as a big cloud with a bunch a values, there are no duplicates, and is not an array.

JavaScript Natively has Sets as of ES6.

Leaking DOM nodes might be a good use case for Sets and Maps in Libraries because then you can just pass the reference and not keep it in memory.