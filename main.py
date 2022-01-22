def getData():
    url = 'csv_exercise.csv'
    file = open(url, 'r')
    arr = []
    for line in file:
        str = line.replace("\n","")
        arr_str = line.split(',')
        for iter in arr_str:
            arr.append(iter)
    file.close()
    iter=0
    while iter<len(arr):
        if len(arr[iter])<1:
            arr.pop(iter)
        iter=iter+1
    arr_dir =dir()
    for iter in arr:
        locals()[iter[0]] = iter[4:]
        
    return(list(set(dir())-set(arr_dir)))

res = getData()
print(res)
