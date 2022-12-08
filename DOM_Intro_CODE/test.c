# include <limits.h>
# include <string.h>
# include <stdio.h>
 
# define NO_OF_CHARS 256

void badCharHeuristic( char *str, int size,
                        int badchar[NO_OF_CHARS])
{
    int i;
 
    // Initialize all occurrences as -1
    for (i = 0; i < NO_OF_CHARS; i++)
         badchar[i] = -1;
 
    // Fill the actual value of last occurrence
    // of a character
    // for (i = 0; i < size; i++)
    //      badchar[(int) str[i]] = i;
}

int main()
{
    // char txt[] = "ABAAABCD";
    // char pat[] = "ABC";

    for(i=0; i < NO_OF_CHARS; i++)
    {
        
    }


    return 0;
}