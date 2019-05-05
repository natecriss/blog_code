#!/use/bin/python

#Python has a handy external library available to read CSV files
import csv

#open the CSV File for reading

with open('vlan.txt') as input_file:
        line_reader = csv.reader(input_file, delimiter='\t')
#delimiter of line is set to tab character represented as \t
        for row in line_reader:
                ports = row[3].split(",")
                for port in ports:
                        iosconfig = """\
int g{} 
switchport
switchport mode access
switchport access vlan {}
no shut \n\n\n
                                    """
                                      
                        print iosconfig.format(port,row[1])


