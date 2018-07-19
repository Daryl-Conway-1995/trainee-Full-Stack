package com.qa.util;

import com.google.gson.Gson;

public class JSON {

	private Gson gson;

	public JSON() {
		this.gson = new Gson();
	}

	public String JSONFromAnObject(Object obj) {
		return gson.toJson(obj);
	}

	public <T> T ObjectFromJSON(String jsonString, Class<T> clazz) {
		return gson.fromJson(jsonString, clazz);
	}

}