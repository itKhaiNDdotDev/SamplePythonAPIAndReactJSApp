import unittest
import app

class TestStudentAPI(unittest.TestCase):
    def setUp(self):
        self.app = app.app.test_client()
        self.app.testing = True

    def test_get_students(self):
        response = self.app.get('/students')
        self.assertEqual(response.status_code, 200)

    def test_add_student(self):
        response = self.app.post('/students', json={"name": "", "gender": "Male", "class": "10A"})
        self.assertEqual(response.status_code, 200)
        self.assertIn('_id', response.json)

if __name__ == '__main__':
    unittest.main()