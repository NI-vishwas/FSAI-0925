#!/usr/bin/env python3
# Author: Vishwas K Singh
# Email:
# Script to calculate Simple Interest
# si = (p*t*r)/100

def calculate_si(principal, time_in_months):
    if time_in_months <=6:
        rate_of_interest = 0.05
    elif time_in_months > 6 and time_in_months <=24:
        rate_of_interest = 0.07
    else:
        rate_of_interest = 0.1

    simple_interest = (principal * time_in_months * rate_of_interest)/100
    return simple_interest

times = [3,18,36]
for i in range(3):
    principal = int(input('Enter the principal amount: '))
    print(f'Simple Interest is {calculate_si(principal, times[i]): .2f}')

# print('Simple Interest is', simple_interest)
# print('Simple Interest is'+str(simple_interest))
# print('Simple Interest is %f'%(simple_interest))

