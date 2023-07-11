<!DOCTYPE html>
<html>
<body>
    <?php
        $x=10;
        function mytest(){
            global $x;
            echo "<p>variable x inside function is: $x</p>";
        }
        mytest();
        echo "<p>variable x outside function is: $x</p>";
    ?>

    <?php
     //   local variable 
     function mytest3(){
        $k=25;
        echo "<p>variable k inside function is :$k</p>";
    }

    mytest3();
    echo "<p>variable k outside function is :$k</p>";
    
    ?>

    <?php
        $x=10;
        $y=5;
        function mytest2(){
            $GLOBALS['z']=$GLOBALS['x']+$GLOBALS['y'];
        }
        mytest2();
        echo $z;
    ?>
</body>
</html>