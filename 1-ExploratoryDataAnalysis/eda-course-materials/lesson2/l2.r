install.packages('devtools', dependencies = T)
library(devtools)
install_version("colorspace","1.2-4")

reddit <- read.csv('reddit.csv')
table(reddit$employment.status)

str(reddit)
levels(reddit$age.range)

library(ggplot2)
qplot(data = reddit, x = age.range)

reddit$age.range <- ordered(reddit$age.range, levels = c("Under 18", "18-24", "25-34", "35-44", "45-54", "55-64", "65 or Above"))
reddit$income.range
str(reddit)
table(reddit$income.range)
