# Udacity Project: Create a Tableau Story v2
[Tableau link V1](https://public.tableau.com/profile/228149966#!/vizhome/UdacityDANDPart3Projectv1/StoryofCancellations?publish=yes)
[Tableau link V2](https://public.tableau.com/profile/228149966#!/vizhome/Part3Project/StoryofCancellations)

## Summary
In this project, I have chosen the dataset from RITA ichi is about the US flights delay and cancelled data in 2008. In the dataset, the origins and destinations, the flights number and airlines, the delay time and delay code, and other information are given. By analyzing this dataset, we can have a clear view about the flights delays and give us some insight on how to improve it.

## Design
The first sheet is to look at the average departure and arrival delay in each month. We will have an idea of how many minutes for each and a line plot is a good choice. The second sheet is the line plot of how many cancelled and diverted flights in each month, line chart will also be useful. For cancelled flights, we can look at the cancellations with different code. A filter on the cancellation code would give us a better visualization. Also from the feedback, instead of adding cancellation code directly into the chart, I created a calculation filed to display the situation each cancellation code represent, and use that as a filter. In this way, people will have a better idea what’s the reason of cancellation. We can also find which origin and destination have the most cancellations. For plots of these, a bar plot would be more useful and we can rank it from high to low. Since we have the data of carriers, we can find which company has the most cancellations and their cancellations in each month. A bar plot is also useful here and unique carrier can be added as filter. Because we know the origins and destinations, we can also have geographic visualizations about the cancellations, diverted flights, origins and destinations. People can play around and see the difference in each month and different cities. We can also add filter to look at in each month, which city has most cancellations. 

In the first dashboard, I put the cancellations by code together with cancellations and diverted flights by month. A better view of cancellations is given here. In the second dashboard, I put cancellations by origin and destination airport together. In this way we can have a better understanding of the cancellations by month, by code, by origins and destinations.

In the story, I put together all the sheets related to cancellations to finalize the story. It first tells us information about delays and number of cancellations in each month. Then more info about cancellation code, cancellations of carriers, origin airport and departure airport are given.

## Feedback
### feedback from peer
* What do you notice in the visualization?
	* Way too much text
		* For this feedback, since I already edited my work before the first submission, it’s really possible to show the difference I made. 
	* Lack of title for all plots, use column plot for all time period plot. 
* What questions do you have about the data?
	* What does the cancellation code stand for?
		* For this feedback, a calculation filed has been created to give details of the cancellation code stand for.
* What relationships do you notice?
	* Information is in accordance with section tap
	* This is a nice touch.
* What do you think is the main takeaway from this visualization?
	* The main reason having this visualization is clear, however things can be improve.
* Is there something you don’t understand in the graphic?
	* Most plots are self-explanatory.  
	
### feedback from 1st Udacity review
* In your “Design” section please also explain: How did you make your initial visualization decisions? Please justify your decisions of the chart types, legends, etc in the visualization. For example, you can say "I chose bar charts for reasons A and B ..."
* To evaluate this section, we also need to compare your initial design to final design (after feedback revision) therefore for the next submission; please include two links in your write-up, one for the initial and one for the final version. Also please document the changes you've made more in detail in the Design section. For example, you can say based on Feedback "A", I decided to change the plot's type or any other modifications that you have made. We basically want to see how did you improve your project base on the received feedback.
	* For this feedback, I have rolled back some of my changes and create actually two versions of  story. V1 is the most closeted version before I got feedback from the peer, but for each story text has already been edited and it’s hard to roll back what I have before. V2 is the most updated after I got review from Udacity. 

## Resources
[Source of Data](http://stat-computing.org/dataexpo/2009/the-data.html)
