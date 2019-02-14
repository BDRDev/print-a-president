<?php

/* DO NOT USE THIS FILE, COPY AND PASTE THIS CODE INTO CONNECTION.CLASS.PHP */
/* ADD ALL DATABASE CONNECTIONS TO THE CONSTRUCTOR AND CHANGE THE LOCATION BASED ON DEPLOYMENT */


class Connection {

	protected $location = 'laptop';

	protected $serverName;
	protected $database;
	protected $username;
	protected $password;


	public function __construct(){

		if($this->location === 'laptop'){

			$this->serverName = '';
			$this->database = '';
			$this->username = '';
			$this->password = '';
			
		} else if($this->location === 'server'){

			$this->serverName = '';
			$this->database = '';
			$this->username = '';
			$this->password = '';
		}
	}

}