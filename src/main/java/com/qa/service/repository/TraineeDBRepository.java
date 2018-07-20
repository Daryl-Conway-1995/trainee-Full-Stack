package com.qa.service.repository;

import static javax.transaction.Transactional.TxType.REQUIRED;
import static javax.transaction.Transactional.TxType.SUPPORTS;

import java.util.Collection;

import javax.enterprise.inject.Default;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.transaction.Transactional;

import com.qa.domain.Trainee;
import com.qa.util.JSON;

@Transactional(SUPPORTS)
@Default
public class TraineeDBRepository implements TraineeRepository {

	@PersistenceContext(unitName = "primary")	private EntityManager manager;

	@Inject
	private JSON util;

	public String getAllTrainees() {
		Query query = manager.createQuery("Select a FROM Trainee a");
		Collection<Trainee> trainees = (Collection<Trainee>) query.getResultList();
		return util.JSONFromAnObject(trainees);
	}

	@Transactional(REQUIRED)
	public String createTrainee(String trainee) {
		Trainee aTrainee = util.ObjectFromJSON(trainee, Trainee.class);
		manager.persist(aTrainee);
		return "{\"message\": \"Trainee has been sucessfully added\"}";
	}

	@Transactional(REQUIRED)
	public String updateTrainee(Long id, String traineeToUpdate) {
		Trainee updatedTrainee = util.ObjectFromJSON(traineeToUpdate, Trainee.class);
		Trainee traineeFromDB = findTrainee(id);
		if (traineeToUpdate != null) {
			traineeFromDB = updatedTrainee;
			traineeFromDB.setId(id);
			manager.merge(traineeFromDB);
		}
		return "{\"message\": \"Trainee sucessfully updated\"}";
	}

	@Transactional(REQUIRED)
	public String deleteTrainee(Long id) {
		Trainee traineeInDB = findTrainee(id);
		if (traineeInDB != null) {
			manager.remove(traineeInDB);
		}
		return "{\"message\": \"Trainee sucessfully deleted\"}";
	}

	private Trainee findTrainee(Long id) {
		return manager.find(Trainee.class, id);
	}

	public void setManager(EntityManager manager) {
		this.manager = manager;
	}

	public void setUtil(JSON util) {
		this.util = util;
	}

}
