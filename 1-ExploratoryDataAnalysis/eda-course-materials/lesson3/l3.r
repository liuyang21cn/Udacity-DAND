list.files()

pf <- read.csv('pseudo_facebook.tsv', sep = '\t')
names(pf)

library(ggplot2)

ggplot(aes(x = dob_day), data = pf) +
        geom_histogram(binwidth = 1) +
        scale_x_continuous(breaks = 1:31) +
        facet_wrap(~dob_month, ncol = 4)






