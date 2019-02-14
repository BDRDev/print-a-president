<?php


include './includes/config.php';


include ABSOLUTE_PATH . '/includes/header.php';
include ABSOLUTE_PATH . '/includes/databaseConnect.php';
include ABSOLUTE_PATH . '/includes/main_nav.php';
?>





    <!--youtube video-->
<div id="homeSection" class="sect2 sectOne">
    <iframe id="calloutVideo" src="https://www.youtube.com/embed/NtR6UVUB7z0?ecver=2&modestbranding=0&rel=0&showinfo=0&color=white&fs=0&loop=1&autoplay=1&controls=0" frameborder="0" ></iframe>
</div>

    <!-- <div id="aboutSection" class="subSection"></div> -->

    <!--about/call to action section-->
    <div id="aboutSection2" class="sect sectThree">
        <div class="wrapperWrapper">
            <div id="aboutWrapper">
                <div id="aboutTitle"><h1>BE A PART OF IT</h1></div>
                <div id="aboutContent">
                    <p>We would like to warmly welcome you to Print a President. This is an innovative partnership idea between the Benjamin Harrison Presidential Site in Indianapolis, IN and Indiana University-Purdue University Indianapolis that pushes the limits of how we interact with history. The mission of this initiative is to ultimately crowd print a life-size statue of President Benjamin Harrison that will stand at five foot and six inches tall. This is made possible by the big ideas and bold action of the Benjamin Harrison Presidential Site in an effort to not only preserve their nationally-significant collection, but also to make this interactive approach to learning something that everyone can participate in and have access to no matter where they are located. </p>
                    <p>Ultimately, this is about impact. We want to show the world that emerging technology can seamlessly blend with history to create an interactive experience that is completely unique. The completed statue will make it’s home in Indianapolis at the Benjamin Harrison Presidential Site, where it will welcome over 19,000 school children each year, as well as more than 30,000 visitors total each year that represent an overwhelming 45 states and over 40 countries. We look forward to having you join us on our mission to bring history into the 21st century.</p>
                    <center><h3>"Great lives never go out; they go on."</h3><h4>- President Benjamin Harrison</h4></center>
                </div>
            </div>
        </div>
    </div>


    <!--subsection #2-->
    <div class="subSection"></div>

    <!--api frame for sketchfab-->
    <div id="printingSection" class="sect2 sectTwo">

        <iframe id="api-frame" frameborder="0">
            
        </iframe>
        <div class="api_detail_wrapper">
            <div class="api_detail_section">


                <?php
                    if(isset($_SESSION["user_id"])){

                        //echo "SOMEONE IS LOGGED IN";
                    }
                ?>
                    <div class="checkoutButtonWrapper">
                        
                        <a class="checkoutButton">CHECKOUT</a>

                    </div>

                    <div class="messages"></div>

                    <div class="rules"></div>

                    <div class="backButtonLocation"></div>
                       
                
            </div>
        </div>

        
    </div>

    <!--contributors section-->
    <div id="contributorsSection" class="sect sectFour">

        <div class="wrapperWrapper">
            <div id="contributorWrapper">
                <div id="contributorContent">
                    <h1>|| Your Name Here, Your Organization Here ||</h1>
                    <?php
                    $sql = "SELECT * FROM users WHERE status='complete'";
                    $query = $conn->query($sql);


                    //Handle selection errors
                    if (!$query) {
                        $errno = $conn->errno;
                        $errmsg = $conn->error;
                        echo "Selection failed with: ($errno) $errmsg<br/>\n";
                        $conn->close();
                        require_once ('includes/footer.php');
                        exit;
                    }
                    echo "<p>";
                    //create a while loop here to insert one row for each user.
                    while (($row = $query->fetch_assoc()) !== NULL) {
                        echo "<b>" , $row['firstname'] ,' ' , $row['lastname'] ,  "</b>" , "," , ' ' , $row['organization'] , '  ' , "||" , '  ';
                    }
                    echo "</p>";
                    ?>
                </div>
                <div id="contributorTitle"><h1>C&nbsp;O&nbsp;N&nbsp;T R&nbsp;I&nbsp;B&nbsp;U&nbsp;T O&nbsp;R&nbsp;S&nbsp;//</h1></div>
            </div>
        </div>
    </div>

    <!--subsection #3-->
    <div class="subSection">
    </div>

    <div id="collaboratorSection" class="sect sectFour">

        <div class="collaboratorwrapperWrapper">
            <div id="collaboratorWrapper">
                <div id="collaboratorTitle"><h1>C&nbsp;O&nbsp;L&nbsp;L&nbsp;A B&nbsp;O&nbsp;R&nbsp;A&nbsp;T O&nbsp;R&nbsp;S&nbsp;&nbsp;//</h1></div>
                <div id="collaboratorContent">
                    <p>
                        <b>Charles Hyde & Jennifer Capps</b>, Benjamin Harrison Presidential Site | <b>Robert Sunderlin & Tori Roessler</b>, IUPUI 2017 Fall Capstone Class | <b>Zebulun Wood</b>, IUPUI | <b>Rob Lastinger</b>, IUPUI 3D Lab | <b>Jeff Maurer</b>, Virtual Xperience | <b>Jeff Rogers & Chauncey Frend</b>, Advanced Visualization Laboratory | <b>Jennifer Johnson</b>, Center for Digital Scholarship | <b>Scott Umsteadt & Levi Conklin</b>, IUPUI 2017 Spring N420 Class
                    </p>
                </div>

            </div>
        </div>
    </div>


    <script type="text/javascript" src="https://static.sketchfab.com/api/sketchfab-viewer-1.3.1.js"></script>
    

    <?php
    if(isset($_SESSION["user_id"])){
        ?>

        <script>
            let currentUserId = '<?php echo $_SESSION["user_id"] ?>';
            let currentUserRole = '<?php echo $_SESSION["user_role"] ?>';
        </script>

        <?php
    } else {
        ?>

        <script>
            let currentUserId = null;
            let currentUserRole = null;
        </script>

        <?php
    }

    ?>


    

    
    <script> let page="index"; </script>

    <script src="./build/main.bundle.js"></script>


<?php
include ABSOLUTE_PATH . '/includes/footer.php';
?>