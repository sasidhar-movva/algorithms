//https://practice.geeksforgeeks.org/problems/validate-an-ip-address-1587115621/1 

isValid(s){ 
      if ( /^((25[0-5]|2[0-4][0-9]|[1][0-9][0-9]|0?[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|[1][0-9][0-9]|0?[1-9][0-9]|[0-9])$/.test(s))
        {
         return 1
        }

        return 0
    }
