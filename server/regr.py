import pandas as pd
from sklearn import linear_model
from sklearn.metrics import mean_squared_error
from sklearn.utils import shuffle
import matplotlib.pyplot as plt
import numpy as np
from math import *

#read file (df is global)


#to select required columns (years: Jan 2007 - Dec 2012)
def select_cols_for_ml():
    cols = []
    cols.append(0)
    cols.append(1)
    for i in range(146, 218):
        cols.append(i)
    return cols

#for years : jan 2007 - dec 2011
def select_cols_for_training():
    cols = []
    #cols.append(0)
    for i in range(2, 62):
        cols.append(i)
    return cols

#for years : jan 2007 - dec 2011
def select_cols_for_history():
    cols = []
    cols.append(0)
    cols.append(61)
    return cols


def get_data():
    
    
    df = pd.read_csv('crimes.csv')
    #index starts from 1
    df.index+=1
    df = df.drop('Subcategory', axis=1)
    df.rename(columns={'Offence category': 'Offence_category'}, inplace=True)
    #drop last 4 useless rows
    df = df[:-4]
    #list of unique offences in the table 
    #count = 1
    #for i in df.Offence_category.unique():
    #    print(count, i)
    #    count+=1
    #list of unique LGAs
    #count = 1
    #for lga in df.LGA.unique():
    #    print(count, lga)
    #    count+=1
    #get sum of number of offences of each category in each lga
    df = df.groupby(['LGA','Offence_category']).sum().reset_index()
    
    #select rqd cols: index, area, offence and years: Jan 2007 - Dec 2012
    df = df.iloc[:, select_cols_for_ml()]
    return df


def prepare_model(df1):

    

    df2 = shuffle(df1)
    df2 = df2.reset_index()
    df2 = df2.drop('index', axis=1)
    #all values from 2007 - 2011 for training
    crime_x = df2.iloc[:, select_cols_for_training()].values
    #values from jan 2012 as target to be predicted
    crime_y = df2[['Jan 2012']].values

    
    return crime_x, crime_y, df2

    
def get_crime_prediction(lga, crime_type):

    
    df = get_data()

    df1 = df.loc[df['Offence_category'] == crime_type]
    crime_x, crime_y, df2 = prepare_model(df1)

    model = linear_model.LinearRegression()
    model.fit(crime_x, crime_y)
    y_pred = model.predict(crime_x)

    mylist = {}
    j = 0
    for i in range(len(crime_x)):
            area = df2.iloc[j,0]            
            predicted_crime_rate = float("{0:.2f}".format(fabs(y_pred[i])))
            #print(j, " ", area," ", "Expected:",crime_y[i], "Predicted: %.2f"% fabs(y_pred[i]))            
            mylist[area] = predicted_crime_rate
            j+=1

    #print("Mean squared error: %.2f" % mean_squared_error(crime_y, y_pred))


    prediction = mylist[lga]

    return prediction
'''
#returns a dataframe of historical crime data for all crimes in given area 
def history(lga):
    df = get_data()
    df = df.iloc[:, select_cols_for_history()]
    df1 = df.loc[df['LGA'] == lga]
    return df1
'''

def last_month_history(lga, crime):
    df = get_data()
    df = df.loc[df['Offence_category'] == crime]
    df = df.iloc[:, select_cols_for_history()]
    df = df.loc[df['LGA'] == lga, 'Dec 2011'].item()
    #df = df.loc[df['LGA'] == lga]
    return df

#prediction = get_crime_prediction("Randwick", "Theft")
#print(prediction)
#last_month_history("Woollahra", "Theft")