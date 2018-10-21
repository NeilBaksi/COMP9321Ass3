import pandas as pd
from sklearn import linear_model
from sklearn.metrics import mean_squared_error
from sklearn.utils import shuffle
import matplotlib.pyplot as plt
import numpy as np
from random import randint
import json
from regr import get_crime_prediction
from regr import last_month_history



def caching_crimes():

    file.write('export default [\n')
    df = pd.read_csv('crimes.csv')
    #index starts from 1
    df.index+=1
    df = df.drop('Subcategory', axis=1)
    df.rename(columns={'Offence category': 'Offence_category'}, inplace=True)
    #drop last 4 useless rows
    df = df[:-4]
    #list of unique offences in the table 
    count = 0
    for i in df.Offence_category.unique():
        #print(count, i)
        file.write('  {\n')
        file.write('    id: '+str(count)+',\n')
        file.write('    title: \''+i+'\',\n')
        file.write('    selected: false,\n')
        file.write('    key: \'crime\'\n')
        file.write('  },\n')

        count+=1
    #list of unique LGAs
    count = 0
    for lga in df.LGA.unique():
        count+=1
    #get sum of number of offences of each category in each lga
    df = df.groupby(['LGA','Offence_category']).sum().reset_index()
    df.index+=1
    # with pd.option_context('display.max_rows', 20, 'display.max_columns', 6):
    #     print(df)


def caching_places():

    file.write('export default [\n')
    df = pd.read_csv('crimes.csv')
    #index starts from 1
    df.index+=1
    df = df.drop('Subcategory', axis=1)
    df.rename(columns={'Offence category': 'Offence_category'}, inplace=True)
    df.rename(columns={'Dec 2012': 'lastCol'}, inplace=True)
    #drop last 4 useless rows
    df = df[:-4]
    #list of unique LGAs
    count = 0
    for lga in df.LGA.unique():
    #    print(count, lga)
        file.write('  {\n')
        file.write('    id: '+str(count)+',\n')
        file.write('    Title: \''+lga+'\',\n')
        file.write('    state_code: \'NSW\',\n')
        for i in df.Offence_category.unique():
            file.write('    \''+i+'_predicted\': \''+str(get_crime_prediction(lga, i))+'\',\n')
            file.write('    \''+i+'_historical\': \''+str(last_month_history(lga, i))+'\',\n')
            print (i+"---"+str(get_crime_prediction(lga, i)))
        file.write('    selected: false,\n')
        file.write('    key: \'location\'\n')
        file.write('  },\n')

        count+=1
    #get sum of number of offences of each category in each lga
    df = df.groupby(['LGA','Offence_category']).sum().reset_index()
    df.index+=1

if __name__ == "__main__":

    file = open('../client/src/components/places.jsx','w') 
    #pre process data
    caching_places()
    file.write(']\n')
    file.close() 

    file = open('../client/src/components/crimes.jsx','w')
    #pre process data
    caching_crimes()
    file.write(']\n')
    file.close() 



