  <script>

    function exibir(param){

        document.write(param);

    }

    function function_array(){
        
        nums = [
            100
        ]
       
        return (nums);
    }

    function find_max(array_param){
       
        let max_num = Number.NEGATIVE_INFINITY; 
        
        for (let num of function_array(array_param)){
            if (num > max_num){
                // num = max_num -infinity
                // max_num += num -infinity
                // max_num = num 100
                max_num += num;
            }
        }
        
        return exibir(max_num);

        }
    </script>
