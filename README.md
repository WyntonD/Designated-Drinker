                                            Happy Hour

        Description: A site that allows you to view ingredients of a desired cocktail of your choice.

                                        API: The Cocktail DB
                                        Library: Bootswatch

        Team Members: Sue (HTML, JS), Brian(JS/API), Wynton(JS/API), Rebekah (HTML,CSS), William (CSS)


The overall objective of this project was to configure a solution as to how a person can see individual ingredients that create any desired cockTail of a user's choice. We approached this problem by incorporating the API key of The CockTail Database which provided a wide array of information on cocktail ingredients and measurements. The primary challenge we faced while working on this project dealt with organizing and trimming the information within the arrays. There are some cocktail beverages that only have 3 ingredients, while others may have up to 15. This created a dilemma where by the array of a cocktail with few ingredients also came with a mass of empty array spaces which unwantedly populated our website. We navigated this issue by implementing a conditional that trimmed the value length of the array if the ingredients were less than the original length of the cocktail array. This allowed for the user to view cocktail ingredients without seeing excessive blank spaces on the screen when searching drinks. 

