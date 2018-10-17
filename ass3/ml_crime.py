import pandas as pd
from sklearn import linear_model
from sklearn.metrics import mean_squared_error
from sklearn.utils import shuffle
import matplotlib.pyplot as plt
import numpy as np
from math import *

df = pd.read_csv('crimes.csv')

df.index+=1

df = df.drop('Subcategory', axis=1)

df.rename(columns={'Offence category': 'Offence_category'}, inplace=True)

df = df[:-4]

df = df.groupby(['LGA', 'Offence_category']).sum().reset_index()
df.index += 1


#to select required columns (years: Jan 2007 - Dec 2011)
def select_cols_for_ml():
    cols = []
    cols.append(0)
    cols.append(1)
    for i in range(146, 218):
        cols.append(i)
    return cols



def get_all_crime_types():
    """""
    Returns:
       A list of all crime types

    """""
    return list(set(df['Offence_category']))


def select_cols_for_training():
    cols = []
    #cols.append(0)
    for i in range(2, 62):
        cols.append(i)
    return cols


#ML

def ml(my_df, predict_date, crime_type):
    """""
    Args:
        my_df (df): DataFrame.
        predict_date (str): Prediction date (i.e Jan 2012).
        crime_type (str): CrimeType (i.e Assault)

    """""
    print('\n' + predict_date, crime_type, ':')
    my_df = my_df.loc[df['Offence_category'] == crime_type]
    my_df = shuffle(my_df)

    #all values from 2007 - 2011 for training
    assault_x = my_df.iloc[:, select_cols_for_training()].values

    #values from jan 2012 as target to be predicted
    assault_y = my_df[[predict_date]].values

    # Split the dataset in train and test data
    # A random permutation, to split the data randomly
    split_point = int(len(assault_x) * 0.75)
    assault_x_train = assault_x[:split_point]
    assault_y_train = assault_y[:split_point]
    assault_x_test = assault_x[split_point:]
    assault_y_test = assault_y[split_point:]

    model = linear_model.LinearRegression()

    model.fit(assault_x_train, assault_y_train)

    y_pred = model.predict(assault_x_test)

    for i in range(len(assault_y_test)):
            print("Expected:", assault_y_test[i], "Predicted:", y_pred[i])

    # The mean squared error
    print("Mean squared error: %.2f" % mean_squared_error(assault_y_test, y_pred))


# select rqd cols (years: Jan 2007 - Dec 2011)
df1 = df.iloc[:, select_cols_for_ml()]
df1.head(200)

# The default
ml(df1, 'Jan 2012', 'Assault')
ml(df1, 'Feb 2013', get_all_crime_types()[3])


