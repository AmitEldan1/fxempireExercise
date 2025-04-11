## Elements that require better test coverage :
    1.	The "search" field had slightly slow loading, which required the use of intercept.
	2.	Elements had non-unique selectors – many fields were missing data-cy attributes or any other unique identifiers.
	3.	In the "search" test, data can be retrieved via API, allowing verification that each piece of information is accurate.


## Challenge I faced:

The main challenge I encountered was non-unique selectors and the lack of control over them. This made it difficult for me to create generic tests, which is something very important to me. Nevertheless, I managed to overcome the challenge. In my previous role, I personally added unique identifiers to the code, which allowed me to maximize the effectiveness of automation.

## Issues I found on the website:
	1.	The search field retrieves only up to 8 results at a time.
	2.	"Actual" data is often missing in the calendar.
	3.	On mobile, there are more buttons in the navigation bar than on desktop.
	4.	There is a display bug when selecting a language other than English.
	5.	In the crypto, market trends are not displayed on the Markets page.