package com.qa.interoperability;

import javax.inject.Inject;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;

import com.qa.service.business.TraineeService;

@Path("/Trainee")
public class TraineeEndpoint {

	@Inject
	private TraineeService service;

	@Path("/json")
	@GET
	@Produces({ "application/json" })
	public String getAlltrainees() {
		return service.getAllTrainees();
	}

	@Path("/json")
	@POST
	@Produces({ "application/json" })
	public String addtrainee(String trainee) {
		return service.addTrainee(trainee);
	}

	@Path("/json/{id}")
	@PUT
	@Produces({ "application/json" })
	public String updatetrainee(@PathParam("id") Long id, String trainee) {
		return service.updateTrainee(id, trainee);
	}

	@Path("/json/{id}")
	@DELETE
	@Produces({ "application/json" })
	public String deletetrainee(@PathParam("id") Long id) {
		return service.deleteTrainee(id);

	}

	public void setService(TraineeService service) {
		this.service = service;
	}

}
