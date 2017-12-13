const Sort = {

    selection: function(list){
        let min =0;

        for(let x=0;x<list.length-1;x++){
            min=x;
            for(let y=x;y<list.length;y++){
                if(list[y]<list[min]){
                    min=y;
                }
            }
            if(min != x){
                let temp = list[x];
                list[x] = list[min];
                list[min] = temp;
            }
        }
        return list;
    },

    insertion: function(list){
        let j;
        for(let i=1;i<list.length;i++){
            j=i;
            while(j>0 && list[j-1]>list[j]){
                //swap j and j-1
                let temp = list[j-1];
                list[j-1]=list[j];
                list[j] = temp;
                j--;
            }
        }
        return list;
    }

}
module.exports = Sort;
