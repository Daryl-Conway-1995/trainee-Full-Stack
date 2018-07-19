package com.qa.service.repository;

import java.util.HashMap;
import java.util.Map;

import javax.enterprise.context.ApplicationScoped;
import javax.enterprise.inject.Alternative;
import javax.inject.Inject;

import com.qa.domain.Trainee;
import com.qa.util.JSON;

@ApplicationScoped
@Alternative
public class TraineeMapRepository implements TraineeRepository {

	private final Long INITIAL_COUNT = 1L;
	private Map<Long, Trainee> traineeMap;
	private Long ID;

	@Inject
	private JSON util;

	public TraineeMapRepository() {
		this.traineeMap = new HashMap<Long, Trainee>();
		ID = INITIAL_COUNT;
	}

	public String getAllTrainees() {
		return util.JSONFromAnObject(traineeMap.values());
	}

	public String createTrainee(String trainee) {
		ID++;
		Trainee newTrainee = util.ObjectFromJSON(trainee, Trainee.class);
		traineeMap.put(ID, newTrainee);
		return trainee;
	}

	public String updateTrainee(Long id, String traineeToUpdate) {
		Trainee newTrainee = util.ObjectFromJSON(traineeToUpdate, Trainee.class);
		traineeMap.put(id, newTrainee);
		return traineeToUpdate;
	}

	public String deleteTrainee(Long id) {
		traineeMap.remove(id);
		return "{\"message\": \"accout sucessfully removed\"}";
	}

}
