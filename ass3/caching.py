import pandas as pd
from sklearn import linear_model
from sklearn.metrics import mean_squared_error
from sklearn.utils import shuffle
import matplotlib.pyplot as plt
import numpy as np
import json



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
	count = 1
	for i in df.Offence_category.unique():
	    #print(count, i)
	    file.write('  {\n')
	    file.write('    id: '+str(count-1)+',\n')
	    file.write('    title: \''+i+'\',\n')
	    file.write('    selected: false,\n')
	    file.write('    key: \'crime\'\n')
	    file.write('  },\n')

	    count+=1
	#list of unique LGAs
	count = 1
	for lga in df.LGA.unique():
	   print(count, lga)
	   count+=1
	#get sum of number of offences of each category in each lga
	df = df.groupby(['LGA','Offence_category']).sum().reset_index()
	df.index+=1

def caching_places():

    file.write('export default [\n')
    df = pd.read_csv('crimes.csv')
    #index starts from 1
    df.index+=1
    df = df.drop('Subcategory', axis=1)
    df.rename(columns={'Offence category': 'Offence_category'}, inplace=True)
    #drop last 4 useless rows
    df = df[:-4]
    #list of unique LGAs
    count = 1
    for lga in df.LGA.unique():
        print(count, lga)
        file.write('  {\n')
        file.write('    id: '+str(count-1)+',\n')
        file.write('    title: \''+lga+'\',\n')
        file.write('    selected: false,\n')
        file.write('    key: \'location\'\n')
        file.write('  },\n')

        count+=1
    #get sum of number of offences of each category in each lga
    df = df.groupby(['LGA','Offence_category']).sum().reset_index()
    df.index+=1

if __name__ == "__main__":

	file = open('./src/components/places_2.jsx','w') 
	#pre process data
	caching_places()
	file.write(']\n')
	file.close() 




