For data fetching I created useCharacters hook for better readability in CharacterTable component.

I cached fetch params because I don't like it when I lose filters after each refresh.

I didn't rename attributes because in normal scenario i would use translations, and keys for attributes would have 
normal titles.

I didn't do filtering in FE, because in my opinion advanced filtering should be taken care of at BE, and in this 
case for useful filtering I would have to store each page on FE and create "custom pages" from filtered results.

This API only filters by name, if BE took care of it, this solution would work.

For styling I used tailwind instead of ChakraUI, because I am more familiar with it and i prefer smaller bundle size 
in production.

As requested, whole list can be controlled by keyboard. Including navigating through pages and selecting filters. 
