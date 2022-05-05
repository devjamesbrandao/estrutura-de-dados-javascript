int[] param = new int[4]{ 4, 3, 2, 1 };

        int left = 0;

        int right = param.Length - 1;

        while(left < right)
        {
            int temp = param[left];

            param[left] = param[right];

            param[right] = temp;

            left++;
            right--;
        }

        for (int i = 0; i < param.Length; i++)
        {
            Console.WriteLine(param[i]);
        }
