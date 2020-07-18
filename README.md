# Bin2Dec

**Tier:** 1-Beginner

Binary is the number system all digital computers are based on.
Therefore it's important for developers to understand binary, or base 2,
mathematics. The purpose of Bin2Dec is to provide practice and
understanding of how binary calculations.

Bin2Dec allows the user to enter strings of up to 8 binary digits, 0's
and 1's, in any sequence and then displays its decimal equivalent.

This challenge requires that the developer implementing it follow these
constraints:

-   Arrays may not be used to contain the binary digits entered by the user
-   Determining the decimal equivalent of a particular binary digit in the
    sequence must be calculated using a single mathematical function, for
    example the natural logarithm. It's up to you to figure out which function
    to use.

## User Stories

-   [x] User can enter up to 8 binary digits in one input field
-   [x] User must be notified if anything other than a 0 or 1 was entered
-   [ ] User views the results in a single output field containing the decimal (base 10) equivalent of the binary number that was entered
    //psuedocode 
    binary conversion table

    2^0 = 1, 
    2^1 = 2,
    2^2 = 4,
    2^3 = 8,
    2^4 = 16,
    2^5 = 32,
    2^6 = 64,
    2^7 = 128,
    2^8 = 256

    e.g input: 1011010
    256 128 64 32 16 8 4 2 1
            1  0  1  1 0 1 0         
    sum total = 90.

    Steps: 
    for loop over input_values:
        if(input_value == 0 ){
            stop
        }else{
        value = (forloopindex * input_value)^forloopindex
        Totalvalue += value
        }
    result totalvalue;



    

    

## Bonus features

-   [ ] User can enter a variable number of binary digits

## Useful links and resources

[Binary number system](https://en.wikipedia.org/wiki/Binary_number)


