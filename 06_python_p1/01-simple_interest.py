#!/usr/bin/env python3
# Author: Vishwas K Singh
# Email:
# Script to calculate Simple Interest
# si = (p*t*r)/100

# principal = 1000000
# time_in_months = 36
# rate_of_interest = 0.06

principal = int(input('Enter the principal amount: '))
rate_of_interest = float(input('Enter the rate of interest in percentage(Eg: 7% is 0.07): '))
time_in_months = int(input('Enter the time in months(Eg: 3yrs->36months): '))

simple_interest = (principal * time_in_months * rate_of_interest)/100
# print('Simple Interest is', simple_interest)
# print('Simple Interest is'+str(simple_interest))
# print('Simple Interest is %f'%(simple_interest))
print(f'Simple Interest is {simple_interest: .2f}')
